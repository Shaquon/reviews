import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReviewEntry from './components/ReviewEntry';
import FullStar from './components/FullStar';

const Main = styled.div`
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 630px;
  display: block;
  font-family: Helvetica,Arial,sans-serif;
  line-height: 1.15;
  cursor: default !important;
  -webkit-box-direction: reverse;
  -webkit-font-smoothing: antialiased;
`;

const Slider = styled.div`
  height: 720px;
  overflow: auto;
`;

const Wrapper1 = styled.div`
  margin: 0;
  padding: 0 0 4rem;
  max-width: inherit;
  width: inherit;
  transition: top 100ms ease-out;
  scroll-snap-type: y mandatory;
`;

class ReviewModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      reviewsList: [],
    };
    this.getRestaurantInfo = this.getRestaurantInfo.bind(this);
    this.getReviewsList = this.getReviewsList.bind(this);
  }

  componentDidMount() {
    this.getRestaurantInfo();
    this.getReviewsList();
  }

  getRestaurantInfo(x = 1) {
    axios.get(`/api/restaurants/${x}`)
      .then((res) => {
        this.setState({
          restaurant: res.data[0],
        });
      })
      .catch((err) => {
        console.log('error with axios get request to restaurants table ', err);
      });
  }

  getReviewsList(x = 1) {
    axios.get(`/api/restaurants/${x}/reviews`)
      // .then(res=>res.json())
      .then((res) => {
        this.setState({
          reviewsList: res.data,
        });
      })
      .catch((err) => {
        console.log('error with axios get request to reviews table ', err);
      });
  }

  render() {
    const { reviewsList } = this.state;
    const reviewLength = reviewsList.length;
    console.log(reviewsList);

    const full = [];

    for (let i = 0; i < reviewLength; i += 1) {
      let starArray = [];
      for (let j = 0; j < Math.floor(reviewsList[i].overall_rating); j += 1) {
        starArray.push('star');
      }
      full.push(starArray);
    }
    const partial = [];
    for (let i = 0; i < reviewLength; i += 1) {
      let starArray = [];
      for (let j = 0; j < Math.ceil(reviewsList[i].overall_rating) - Math.floor(reviewsList[i].overall_rating); j += 1) {
        starArray.push('star');
      }
      partial.push(starArray);
    }
    const empty = [];
    for (let i = 0; i < reviewLength; i += 1) {
      let starArray = [];
      for (let j = 0; j < 5 - Math.ceil(reviewsList.overall_rating); j += 1) {
        starArray.push('star');
      }
      empty.push(starArray);
    }

    return (
      <div>
        <Main>
          <Slider>
            <Wrapper1>
              {/* <RestaurantInfo restaurant={restaurant} length={reviewLength} /> */}
              {reviewsList.map((review, index) => (
                <ReviewEntry review={review} key={index} full={full[index]} partial={partial[index]} empty={empty[index]} />
              ))}
            </Wrapper1>
          </Slider>
        </Main>
      </div>
    );
  }
}

ReactDOM.render(<ReviewModule />, document.getElementById('ReviewModule'));
