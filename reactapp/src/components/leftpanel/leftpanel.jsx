import React from 'react';
/*import Searchbox from ''
import Ads from ''*/
import AdScripts from '@/components/ads/adScript.jsx'

import Search from '@/components/search/search.jsx'
import './leftpanel.css'

function leftpanel() {
  return (
      <div className="leftPanel">
          <Search/>
          <AdScripts/> 
      </div>
  );
}

export default leftpanel;