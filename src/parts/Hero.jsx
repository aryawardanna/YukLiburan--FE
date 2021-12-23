import ImageHero from 'assets/image/img-hero.jpg';
import ImageHero_ from 'assets/image/img-hero-frame.jpg';
import IconCities from 'assets/image/icons/ic_cities.svg';
import IconTraveler from 'assets/image/icons/ic_traveler.svg';
import IconTreasure from 'assets/image/icons/ic_treasure.svg';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';
import numberFormat from 'utils/numberFormat';
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <Fade bottom>
      <div className="container ">
        <div className="row align-item-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br /> Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: '170%' }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                  width={36}
                  height={36}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={IconTreasure}
                  alt={`${props.data.IconTreasure} Travelers`}
                  width={36}
                  height={36}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    treasure
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  src={IconCities}
                  alt={`${props.data.cities} Travelers`}
                  width={36}
                  height={36}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{' '}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, hight: 410 }}>
              <img
                src={ImageHero}
                alt="ImageHero"
                className="img-fluid position-absolute"
                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="ImageHero Fra,e"
                className="img-fluid position-absolute"
                style={{ margin: '0 -15px -15px 0' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
