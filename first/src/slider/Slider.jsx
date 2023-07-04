import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import * as stl from './Slider-styles.js'

const Slider = () => {
  const 
  hrefs = ['https://st.depositphotos.com/1001311/3411/i/950/depositphotos_34119767-stock-photo-3d-golden-number-collection-1.jpg',
           'https://i1.sndcdn.com/artworks-000292201434-00e10v-t500x500.jpg',
           'https://img.freepik.com/premium-photo/number-3_2227-161.jpg',
           'https://cdn.pixabay.com/photo/2015/04/04/19/13/four-706894_1280.jpg',
           'https://www.ccsl-cad.co.uk/wp-content/uploads/2018/10/5.jpg',
           'https://st.depositphotos.com/1795881/2861/i/600/depositphotos_28615255-stock-photo-golden-symbol-with-clipping-path.jpg'],

  [infinity, setInfinyty] = useState(false),
  [index, setIndex] = useState(0),

  back = () => hrefs[index-1] === undefined? ( infinity? setIndex(hrefs.length-1) : setIndex(index) ) : setIndex(index-1),
  next = () => hrefs[index+1] === undefined? ( infinity? setIndex(0) : setIndex(index) ) : setIndex(index+1),
  dot = e => setIndex(+e.target.attributes[0].value)

  return (
    <stl.slider className="Slider">
      <stl.sliderBody>
        <stl.Btn onClick={back}>
          <stl.ImgBtn src="https://cdn-icons-png.flaticon.com/512/130/130882.png" alt="back" />
        </stl.Btn>
        <stl.slide className='Slide'>
          <stl.Img src={hrefs[index]} alt="img" />
        </stl.slide>
        <stl.Btn onClick={next}>
          <stl.ImgBtn src="https://cdn-icons-png.flaticon.com/512/130/130884.png" alt="next" />
        </stl.Btn>
      </stl.sliderBody>
      <stl.Dots>
        {hrefs.map((e, i) => <ThemeProvider theme={{bg: i===index? 'green' : 'black'}} key={i}><stl.Dot prefix={i} onClick={e => dot(e)} /></ThemeProvider>)}
      </stl.Dots>
      <button style={{marginTop: '2vw', cursor: 'pointer'}} onClick={() => setInfinyty(!infinity)}>infinity {`${infinity? '✔' : '✘'}`}</button>
    </stl.slider>
  )
}

export default Slider