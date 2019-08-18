import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, onClick, name }) => (
  <button className={className} onClick={onClick}>
    {name}
  </button>
);

const years = [2014, 2015, 2016, 2017, 2018];

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };

  render() {
    const { photos, isFetching, error } = this.props;

    return (
      <div>
        <div>
          {years.map(year => (
            <Button
              className="btn"
              key={year}
              name={year}
              onClick={this.onBtnClick}
            />
          ))}
        </div>
        {error && (
          <p className="error">Во время загрузки фото произошла ошибка</p>
        )}
        {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
        <div>
          {!isFetching &&
            photos.length &&
            photos.map(photo => (
              <img src={photo.sizes[0].url} alt="no_photo" key={photo.id} />
            ))}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string
};
