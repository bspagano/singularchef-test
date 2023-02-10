import React from 'react'
import '../sass/PublicLayout.scss';

function PublicLayout({children}) {
  return (
    <div className='public-layout'>
      {children}
    </div>
  )
}

export default PublicLayout
