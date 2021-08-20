import Link from 'next/link'
const Footer = () => {
    return (
        <>
        <div className="social_links">
        <a href="https://www.instagram.com/developer_sah/">
            <span className="fa-stack fa-lg ig combo">
                <i className="fa fa-circle fa-stack-2x circle"></i>
                <i className="fa fa-instagram fa-stack-1x fa-inverse icon"></i>
              </span>
        </a>
        <a href="#">
            <span className="fa-stack fa-lg fb combo">
                <i className="fa fa-circle fa-stack-2x circle"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse icon"></i>
              </span>
        </a>
        <a href="#">
            <span className="fa-stack fa-lg yt combo">
                <i className="fa fa-circle fa-stack-2x circle"></i>
                <i className="fa fa-youtube-play fa-stack-1x fa-inverse icon"></i>
              </span>
        </a>
        <a href="https://twitter.com/developer_sah">
            <span className="fa-stack fa-lg tw combo">
                <i className="fa fa-circle fa-stack-2x circle"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a href="https://codepen.io/rahulsahofficial">
            <span className="fa-stack fa-lg gt combo">
                <i className="fa fa-circle fa-stack-2x circle"></i>
                <i className="fa fa-codepen fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
        <a href="https://www.linkedin.com/in/developersah/">
            <span className="fa-stack fa-lg tw combo">
                <i className="fa fa-circle fa-stack-2x circle"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse icon"></i>
            </span>
        </a>
    </div>


            <p className="pull-left copyright"> Copyright © Radiance 2020. All right reserved. </p>
       
        



        <style jsx>{
        `
        .social_links
{
    padding: 1rem;
    background: #383838;
    border-radius: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.social_links .combo
{
    transform: scale(0.9);
    transition: 0.4s ease-in;
    margin: 0 0.5rem;
    height: 3em;
    width: 3em;
    line-height: 3em;
}
.combo .circle
{
    color: #f9f9f9;
    transition: 0.4s ease-in;
    font-size: 3em;
}
.combo .icon
{
    color: #444343;
    font-size: 2rem;
    transform: translateY(1px);
    transition: 0.2s ease-in;
}
.combo:hover
{
    transform: scale(1.1);
}
.combo:hover , .combo:hover .icon
{
    color:white;
}
.ig:hover , .ig:hover .circle
{
    color:#e91e63;
}
.fb:hover , .fb:hover .circle
{
    color:#2196f3;
}
.yt:hover , .yt:hover .circle
{
    color:#f44336;
}
.tw:hover , .tw:hover .circle
{
    color:#2196f3;
}
.gt:hover , .gt:hover .circle{
    color: #1f1f1f;
}
        `
      }

      </style>
  </>
)



}

export default Footer



