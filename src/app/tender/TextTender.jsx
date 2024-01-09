import Link from 'next/link';
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function TextTender({ txt }) {


  return (
    <div className='py-2'>
      <div style={{ backgroundColor: 'white', borderRadius: '10px' }} className='p-1 mx-1 text-neutral-800 '>
        <div className='px-2 break-all'>
          <Markdown remarkPlugins={[remarkGfm]}>
            {txt}
          </Markdown>
        </div>
      </div>
    </div>
  )
}
