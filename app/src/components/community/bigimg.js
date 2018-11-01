import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Swiper, Slide } from 'react-dynamic-swiper';
import 'react-dynamic-swiper/lib/styles.css';
import { uicommentimg } from '../../actions/index.js';
import lodashmap from 'lodash.map';
import './bigimg.css';

class Page extends Component {

    componentWillUnmount(){
        let imgObj = {
          bigimgshow : false,
          bigimglist : "",
          bigimgindex : 0
        };
        this.props.dispatch(uicommentimg(imgObj));
    }

    render(){
        const {imglist, showindex, show, dispatch} = this.props;
        let swiperOptions = {
            navigation: false,
            pagination: true,
            scrollBar: false
        };

        //点击显示大图
        let hideimg = ()=>{
            let imgObj = {
                bigimgshow : false,
                bigimglist : [],
                bigimgindex : 0
            };
            dispatch(uicommentimg(imgObj));
        }

        //是否显示大图
        let showstyle = show?"showBigImg":"showBigImg hide";

        return (
            <div className={showstyle} onClick={()=>{hideimg()}} style={{height: window.innerHeight+"px"}}>
                <Swiper
                    swiperOptions={{
                        slidesPerView : 'auto',
                        initialSlide : showindex
                    }}
                    {...swiperOptions}
                    onSlideChangeEnd={(swiper, event) => {
                        console.log("change swiper");
                    }}
                    >
                    {lodashmap(imglist,(img,index)=>{
                        return (
                            <Slide key={index} className="Demo-swiper__slide" style={{height: window.innerHeight+"px"}}>
                                <img src={img} alt=""/>
                            </Slide>
                        );
                    })}
                </Swiper>
            </div>
        )
    }
};
//imglist, showindex, show,
const mapStateToProps =  ({app:{bigimglist:imglist,bigimgshow:show,bigimgindex:showindex}}) =>{
  return {imglist, showindex, show};
};
Page = connect(mapStateToProps)(Page);
export default Page;
