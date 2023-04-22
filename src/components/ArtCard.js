import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(33.33% - 10px);
`;

const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const GalleryCaption = styled.p`
  font-size: 18px;
`;

export const ArtCard = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.artic.edu/api/v1/artworks')
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(artworks, 'DATA');
  }, [artworks]);

  const galleryItems =
    artworks.data && artworks.data.length > 0
      ? artworks.data
          .filter(
            (item) => item.image_id !== '342b2214-04d5-de63-b577-55a08a618960'
          )
          .map((item) => (
            <div
              key={item.id}
              className="article-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'max-content',
                flexGrow: 1,
              }}
            >
              <img
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                alt={item.title}
                style={{ width: '100%' }}
              />
              <div style={{ lineHeight: '0rem' }}>
                <h2>{item.title}</h2>
                <h5>{item.date_display}</h5>
                <p>{item.place_of_origin}</p>
              </div>
            </div>
          ))
      : [];

  const midIndex = Math.ceil(galleryItems.length / 2);

  const firstHalf = galleryItems.slice(0, midIndex);
  const secondHalf = galleryItems.slice(midIndex);

  return (
    <div
      className="main-container"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      <Gallery>
        <GalleryColumn>{firstHalf}</GalleryColumn>
        <GalleryColumn>{secondHalf}</GalleryColumn>
      </Gallery>
    </div>
  );
};

export default ArtCard;
