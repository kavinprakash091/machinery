import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <section className="loading-container">
      <ReactLoading type="spokes" color="#daa000" height={100} width={100} />
    </section>
  );
}
