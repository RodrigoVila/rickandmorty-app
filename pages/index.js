import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Queries from '../graphql/Queries';
import '../style.css';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(Queries);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img
          style={styles.titleImage}
          src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABZxTX1taOD6OD0V72gEkKYL4HeKtWnb3gDpm1BTVgitb1MaJQqaLrunknttERtIrpw-NrEpy-QGWHanetm53Q936HB55aI3kecj7.png?r=221"
          alt=""
        />
      </div>
      <div style={styles.listContainer}>
        {data.characters.results.map(character => {
          return (
            <div style={styles.charContainer} key={character.id}>
              <div style={styles.topContainer}>
                <div style={styles.imageContainer}>
                  <img style={styles.image} src={character.image} />
                </div>
                <div style={styles.nameContainer}>
                  <h2 style={{ ...styles.name, textAlign: 'center' }}>
                    {character.name}
                  </h2>
                  <p style={styles.name}>
                    created {character.location.created}
                  </p>
                </div>
              </div>

              <div style={styles.infoContainer}>
                <p style={styles.info}>
                  Gender: <span style={styles.infoB}>{character.gender}</span>
                </p>
                <p style={styles.info}>
                  Specie: <span style={styles.infoB}>{character.species}</span>
                </p>
                <p style={styles.info}>
                  Origin:
                  <span style={styles.infoB}>{character.origin.name}</span>
                </p>
                <p style={{ ...styles.info, border: 'none' }}>
                  Dimension:
                  <span style={styles.infoB}>{character.origin.dimension}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    paddingRight: 10
  },

  titleImage: {
    height: 150,
    width: 500,
    maxWidth: 400
  },
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

  charContainer: {
    margin: 20,
    border: '2px solid black',
  },
  topContainer: {
    position: 'relative'
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  nameContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgb(32, 35, 41)',
    opacity: 0.8
  },
  name: {
    color: '#fff',
    fontWeight: '500',
    padding: 5
  },
  infoContainer: {
    backgroundColor: 'rgb(51, 51, 51)',
    padding: 0
  },
  info: {
    color: 'rgb(158,158,158)',
    padding: 10,
    borderBottom: '1px solid grey'
  },
  infoB: {
    color: '#FF9400'
  }
};

export default Home;
