import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '@/type';
import Login from '@/Login';

const Hero = () => {
  const [property, setProperty] = useState<Property[] | undefined>(undefined);
  const [user, setUser] = useState<boolean>(false);
 
  const accessToken = localStorage.getItem('accessToken') || '';
  const url = 'https://skill-test.similater.website/api/v1/property/list';
  const userUrl = 'https://skill-test.similater.website/api/v1/user/check';

  const checkUser = async () => {
    try {
      const response = await fetch(userUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    setUser(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json();
      console.log(data);

      setProperty(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <div>
      {user ? (
        <div>
          <p className='font-sans font-semibold text-[20px] leading-[24.2px]'>Service apartments</p>
          {property?.map((item) => (
            <PropertyCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Hero;
