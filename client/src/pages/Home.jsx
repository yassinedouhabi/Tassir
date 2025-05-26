import { Link } from 'react-router';

function Home() {
  return (
    <section className='home-page'>
      <div className='hero-container'>
        <div className='hero-title flex flex-col items-center gap-2 md:items-start text-center md:text-left md:max-w-1/2 '>
          <p className='text-xl md:text-2xl lg:text-3xl font-medium text-slate-500'>Welcome to Tassir</p>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800'>Where Every Order Matters</h1>
        </div>
      </div>
      <div className='cta flex flex-col gap-4 mt-8'>
        <p className='text-lg font-normal text-slate-600 text-center md:text-left'>Do whatever you want:</p>
        <Link to='/orders' className='create-order-link block bg-slate-800 text-white font-bold w-full md:w-1/2 lg:w-1/3 text-center py-4 px-8 rounded-full transition-colors'>
          Go To Create Your Order
        </Link>
        <Link to='/orders-list' className='orders-list-link block bg-slate-800 text-white font-bold w-full md:w-1/2 lg:w-1/3 text-center py-4 px-8 rounded-full transition-colors'>
          Go To Order List
        </Link>
        <Link to='/my-orders' className='orders-list-link block bg-slate-800 text-white font-bold w-full md:w-1/2 lg:w-1/3 text-center py-4 px-8 rounded-full transition-colors'>
          My Orders
        </Link>
      </div>
    </section>
  );
}

export default Home;
