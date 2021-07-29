/* eslint-disable max-len */
import React from 'react';
import Header from '../components/Header';

const Resume = () => {

  // style embed
  const divStyle = {
    position: 'relative', 
    width: '100%',
    height: 0, 
    paddingTop: '129.4118%',
    paddingBottom: '48px', 
    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
    marginTop: '1.6em', 
    marginBottom: '0.9em', 
    overflow: 'hidden',
    borderRadius: '8px', 
    willChange: 'transform'
  };

  const iframeStyle = {
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    top: 0, 
    left: 0, 
    border: 'none', 
    padding: 0,
    margin: 0
  };

  return (
    <>
      <Header />
      <div style={divStyle}>
        <iframe loading="lazy" style={iframeStyle}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEfJ1ngiw4&#x2F;view?embed">
        </iframe>
      </div>
      <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEfJ1ngiw4&#x2F;view?utm_content=DAEfJ1ngiw4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener noreferrer">Resume w&#x2F;o Contact</a> by Victor Williams
    </>
  );
};

export default Resume;
