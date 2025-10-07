"use client"

import Head from 'next/head';
import { useState } from 'react';
import './style.css'

type ServiceKey =
  | 'campaignBanner'
  | 'logoDesign'
  | 'facebookCover'
  | 'videoShoot'
  | 'animatedBanner';

type Service = {
  label: string;
  key: ServiceKey;
  price: Number;
};

const services: Service[] = [
  { label: ' Campaign Banner', key: 'campaignBanner', price: 1600 },
  { label: ' Logo Design', key: 'logoDesign', price: 1600  },
  { label: ' Facebook Cover', key: 'facebookCover', price: 1600  },
  { label: ' Video Shoot', key: 'videoShoot', price: 1600  },
  { label: ' Animated Campaign Banner', key: 'animatedBanner', price: 1600  },
];

export default function CustomPackage() {
  const [selected, setSelected] = useState<Record<ServiceKey, boolean>>({
    campaignBanner: false,
    logoDesign: false,
    facebookCover: false,
    videoShoot: false,
    animatedBanner: false,
  });

  const [amounts, setAmounts] = useState<Record<ServiceKey, number>>({
    campaignBanner: 0,
    logoDesign: 0,
    facebookCover: 0,
    videoShoot: 0,
    animatedBanner: 0,
  });

  const handleToggle = (key: ServiceKey) => {
    setSelected(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAmountChange = (key: ServiceKey, value: number) => {
    setAmounts(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServices = services
      .filter(s => selected[s.key])
      .map(s => ({ service: s.label, quantity: amounts[s.key] }));
    console.log('Custom Package:', selectedServices);
    alert('Package submitted! Check console for details.');
  };

  return (
    <>
      <Head>
        <title>Custom Package Builder | SmartGen</title>
        <meta name="description" content="Select services and set quantities to build your custom digital marketing package with SmartGen." />
      </Head>




      <main className="custom-package">
        <h1>🎯 Build Your Custom Package</h1>
        <p>Select the services you need and specify how many units you want.</p> 
        
        <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
                  {services.map(service => (
                    <tr key={service.key} className="service-block">              
                      <td className="checkbox-label">
                        <div className="name-check">
                          <input
                            type="checkbox"
                            checked={selected[service.key]}
                            onChange={() => handleToggle(service.key)}
                          />
                          <h3>{service.label}</h3>
                        </div>
                      </td>

                      <td>
                        <h3>{service.price.toString()}</h3>
                      </td>
                        
                      {selected[service.key] && (
                        <td>
                          <input
                            type="number"
                            required
                            min={1}
                            value={amounts[service.key]}
                            onChange={e =>
                              handleAmountChange(service.key, parseInt(e.target.value))
                            }
                            className="amount-input"
                            placeholder="Enter quantity"
                          />
                        </td>
                      )}
                    </tr>
                  ))}
          </tbody>
        </table>  
        <div className="btn-container">
          <button className='btn-orange' type='submit'>Order Now</button> 
        </div>  
        </form>  
      </main>
    </>
  );
}