import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import CodeBlock from '../CodeBlock';
import { RichText } from '@graphcms/rich-text-react-renderer';
import styles from './PostDetail.module.scss';

const PostDetail = ({ post }) => {
  const richTextRef = useRef(null);

  useEffect(() => {
    if (richTextRef.current) {
      const links = richTextRef.current.querySelectorAll('a');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
    }
  }, [post]);


  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{modifiedText}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{modifiedText}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{modifiedText}</u>;
      }
      if (obj.hyperlink) {
        modifiedText = <a key={`a-${index}`} href={obj.hyperlink} target='_blank' rel='noopener noreferrer'>{modifiedText}</a>;
      }
    }

    switch (type) {
      case 'code-snippet':
        return <CodeBlock key={index}>{modifiedText}</CodeBlock>
      case 'bulleted-list':
        return <ul key={index} className='list-disc pl-5'>{modifiedText.map((item, i) => <li key={i}>{item}</li>)}</ul>;
      case 'indented-text':
        return <div key={index} className='pl-5'>{modifiedText}</div>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-gray-900 shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-full w-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        <div className={styles['rich-text']}>
          <div className={styles['rich-text']} ref={richTextRef}>
            <RichText content={post.content.raw} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
