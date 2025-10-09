'use client';

import Head from 'next/head';
import { useState } from 'react';
import './style.css';

type ServiceKey =
  | 'campaignBanner'
  | 'logoDesign'
  | 'facebookCover'
  | 'videoShoot'
  | 'animatedBanner';

type Service = {
  label: string;
  key: ServiceKey;
  price: number;
};

const services: Service[] = [
  { label: 'Campaign Banner', key: 'campaignBanner', price: 1600 },
  { label: 'Logo Design', key: 'logoDesign', price: 1600 },
  { label: 'Facebook Cover', key: 'facebookCover', price: 1600 },
  { label: 'Video Shoot', key: 'videoShoot', price: 1600 },
  { label: 'Animated Campaign Banner', key: 'animatedBanner', price: 1600 },
];

export default function CustomPackage() {
  const [alert, setAlert] = useState('');
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
    if (!selected[key]) {
      setAmounts(prev => ({ ...prev, [key]: 1 }));
    }
  };

  const increment = (key: ServiceKey) => {
    setAmounts(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const decrement = (key: ServiceKey) => {
    setAmounts(prev => ({ ...prev, [key]: Math.max(1, prev[key] - 1) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServices = services
      .filter(s => selected[s.key])
      .map(s => ({
        service: s.label,
        quantity: amounts[s.key],
        subtotal: amounts[s.key] * s.price,
      }));

      if(selectedServices.length === 0){
        setAlert('please select atleast 1 service')
      } else {
        setAlert('Custom Package Submitted')
      }
  };

  const total = services.reduce((sum, s) => {
    return selected[s.key] ? sum + amounts[s.key] * s.price : sum;
  }, 0);

  return (
    <>
      <Head>
        <title>Custom Package Builder | SmartGen</title>
        <meta
          name="description"
          content="Select services and set quantities to build your custom digital marketing package with SmartGen."
        />
      </Head>

      <main className="custom-package">
        <h1>🎯 Build Your Custom Package</h1>
        <p>Select the services you need and specify how many units you want.</p>
        <p className= {`alert ${alert===""? "":"show-alert"}`} onClick={()=> {setAlert('')}}>{alert}</p>
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.key}>
                  <td>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={selected[service.key]}
                        onChange={() => handleToggle(service.key)}
                      />
                      {service.label}
                    </label>
                  </td>
                  <td>৳ {service.price}</td>
                  <td>
                    {selected[service.key] && (
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => decrement(service.key)}
                          className="qty-btn"
                        >
                          ➖
                        </button>
                        <input
                          type="number"
                          min={1}
                          value={amounts[service.key]}
                          onChange={e =>
                            setAmounts(prev => ({
                              ...prev,
                              [service.key]: parseInt(e.target.value),
                            }))
                          }
                          className="amount-input"
                        />
                        <button
                          type="button"
                          onClick={() => increment(service.key)}
                          className="qty-btn"
                        >
                          ➕
                        </button>
                      </div>
                    )}
                  </td>
                  <td>
                    {selected[service.key] &&
                      `৳ ${amounts[service.key] * service.price}`}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Total:
                </td>
                <td style={{ fontWeight: 'bold' }}>৳ {total}</td>
              </tr>
            </tfoot>
          </table>

          <div className="btn-container">
            <button className="btn-orange" type="submit">
              Order Now
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
