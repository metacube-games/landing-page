import React from 'react';
import Footer from '@/components/footer';

const CareersPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <h1 className='font-bold'>No job offers available for now</h1>
            <Footer />
        </div>
    );
};

export default CareersPage;
