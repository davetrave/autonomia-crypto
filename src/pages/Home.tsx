import React from 'react';
import Button from '../components/common/buttons/Button';
import Card from '../components/common/cards/Card';

const Home: React.FC = () => {
  return (
    <div className="bg-blue-500 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Crypto Edu</h1>
      <Button
        text="Start Learning"
        onClick={() => alert('Navigating to courses...')}
        className="mx-auto block"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card
          title="Crypto Basics"
          description="Learn the fundamentals of cryptocurrency."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Blockchain Explained"
          description="Understand how blockchain works."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Investing in Crypto"
          description="Explore how to invest safely."
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default Home;
