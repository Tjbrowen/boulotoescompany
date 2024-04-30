import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Services.css';
import useServices from '../../components/hooks/useServices';
import { PuffLoader } from 'react-spinners';
import ServicesCard from '../../components/ServicesCard/ServicesCard';

const Services = () => {
  const { data, isLoading, isError } = useServices();
  const [filter, setFilter] = useState("")

  if (isError) {
    return (
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='wrapper flexCenter' style={{ height: '60vh' }}>
        <PuffLoader 
        height="80"
        width="80"
        radius="1"
        color='#4066ff' 
        aria-label='puff-loading'
         />
      </div>
    );
  }



  return (
    <div className='wrapper'>
      <div className='flexColCenter paddings innerWidth services-container'>
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className='paddings flexCenter services'>
         
        {
            // data.map((card, i) => (<ServicesCard card={card} key={i} />))
            data
              .filter(
                (services) =>
                  services.title.toLowerCase().includes(filter.toLowerCase()) ||
                  services.description
                    .toLowerCase()
                    .includes(filter.toLowerCase())
              )
              .map((card, i) => (
                <ServicesCard card={card} key={i} />
              ))
          }
         
        </div>
      </div>
    </div>
  );
};

export default Services;
