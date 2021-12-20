import React from 'react';
import { Header } from '../components/blogcomponents';
import { PostCard, Categories, PostWidget } from '../components/blogcomponents';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';
import Footer from '../components/footer/footer';

export default function blog({ posts }) {
  return (
    <>
      <div className='container mx-auto px-10 mb-8 bg-gray-800'>
        <Header />
        <FeaturedPosts />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, index) => <PostCard post={post.node} key={post.title} />)}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}