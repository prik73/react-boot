import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const youtubeVideos = [
    {
        id: 1,
        thumbnail: 'https://img.youtube.com/vi/k_V6dAuwmtg/hqdefault.jpg', // Replace VIDEO_ID_1 with actual video ID
        title: 'Right to Property',
        url: 'https://youtu.be/k_V6dAuwmtg' // Replace VIDEO_ID_1 with actual video URL
    },
    {
        id: 2,
        thumbnail: 'https://img.youtube.com/vi/mQROk2iSmEk/hqdefault.jpg', // Replace VIDEO_ID_2 with actual video ID
        title: 'Domestic Violence',
        url: 'https://youtu.be/mQROk2iSmEk' // Replace VIDEO_ID_2 with actual video URL
    },
    {
        id: 3,
        thumbnail: 'https://img.youtube.com/vi/Hd_B7YOCmYQ/hqdefault.jpg', // Replace VIDEO_ID_3 with actual video ID
        title: 'Sexual Harassment at Workplace',
        url: 'https://youtu.be/Hd_B7YOCmYQ' // Replace VIDEO_ID_3 with actual video URL
    }
];

export default function AppWatchOurWork() {
  return (
    <section id='services' className='block watch-services-block'> 
            <div className='title-holder'>
                <h2>Watch Our Work</h2>
                <div className='subtitle'>Our impact in action</div>
                </div>
            <Row className='video-container'>
                {
                    youtubeVideos.map(video => (
                        <Col lg={4} md={6} sm={12} className='holder-videos' key={video.id}>
                            <a href={video.url} target='_blank' rel='noopener noreferrer'>
                                <img src={video.thumbnail} alt={video.title} className='img-fluid' />
                                <h4 style={{ textAlign: 'center' }}>{video.title}</h4>
                            </a>
                        </Col>
                    ))
                }
            </Row>
            
    </section>
  );
}