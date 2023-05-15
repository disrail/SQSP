// debugger;

( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  Page Initializer  : page.gallery
  
  Version           : 0.1.0
  
  SS Version        : 7.0
  
  By                : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  self
  
    .version
    
    .initializer
    
    [ 'page.gallery' ]
    
    =
    
    '0.1.0';
    
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const initialize = ( ) => {
  
    const selector = 'body.collection-type-gallery';
    
    const l = $( selector ).length;
    
    if ( ! l ) return; // bail if not gallery
    
    const m = self._.page; // methods
    
    const p = self.page.gallery; // page
    
    p.is = true;
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self
  
    ._
    
    .initialize
    
    .push ( initialize );
    
  } ) ( xtwcsl );
