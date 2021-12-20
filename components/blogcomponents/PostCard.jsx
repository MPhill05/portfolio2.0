import React from 'react';
import moment from 'moment';
import Link from 'next/link';

import { StyledButton } from '../../styles/styledbtn.styles';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='bg-gray-800 relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition duration-400 text-center mb-8 text-3xl font-semibold'>
        {post.title}
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <img
            alt={post.author.name}
            height='30px'
            width='30px'
            className='align-middle rounded-full'
            src={post.author.photo.url}
          />
          <p className='inline align-middle text-gray-400 ml-2 text-lg'>{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-500 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
      <Link href={`/post/${post.slug}`}>
        <StyledButton className='text-center flex justify-center mx-auto'>
          <span className='transition transform inline-block'>
            Continue Reading
          </span>
        </StyledButton>
      </Link>
    </div>
  )
}

export default PostCard
