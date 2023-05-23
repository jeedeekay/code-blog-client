const Post = () => {
    return (
      <div className='post'>
        <div className='image'>
          <img src='https://cdn.britannica.com/54/162454-050-D6CDF316/turkey.jpg' alt='' />
        </div>
        <div className='texts'>
          <h2>Turkey</h2>
          <p className='info'>
            <a className='author'>Gavin Kinder</a>
            <time>2023-5-21</time>
          </p>
          <p className='summary'>Turkey, either of two species of birds classified as members of either the family Phasianidae or Meleagrididae (order Galliformes).</p>
        </div>
      </div>
    );
}

export default Post;