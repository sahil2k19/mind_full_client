"use client"
import { Container, Breadcrumbs, Link, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

const pages = [
  {
    name: 'Home Section',
    slug: 'homesection'
  },
];

const Admin = () => {
  const router = useRouter();

  return (
    <Container maxWidth="lg" className='px-10 py-4'>
      {/* Breadcrumbs Component */}
      <Breadcrumbs aria-label="breadcrumb" className="mb-4">
        <Link 
          color="inherit" 
          onClick={() => router.push('/admin')} 
          style={{ cursor: 'pointer' }}
        >
          Admin
        </Link>
      </Breadcrumbs>

      <div className='flex justify-center mb-5'>
        <h1 className='text-3xl font-semibold'>Admin</h1>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
        {pages.map((page, index) => (
          <div
            className='px-2 py-5 rounded-lg hover:shadow-lg bg-orange-400 cursor-pointer flex justify-center'
            key={index}
            onClick={() => router.push(`/admin/${page.slug}`)}
          >
            <h1 className='text-white text-xl font-semibold'>{page.name}</h1>
          </div>
        ))}
        <div 
          className='px-2 py-5 rounded-lg hover:shadow-lg bg-orange-400 cursor-pointer flex justify-center' 
          onClick={() => router.push(`/admin/blogs`)}
        >
          <h1 className='text-white text-xl font-semibold'>Blogs</h1>
        </div>
        
        <div 
          className='px-2 py-5 rounded-lg hover:shadow-lg bg-orange-400 cursor-pointer flex justify-center' 
          onClick={() => router.push(`/admin/services`)}
        >
          <h1 className='text-white text-xl font-semibold'>Services</h1>
        </div>
      </div>
    </Container>
  );
};

export default Admin;
