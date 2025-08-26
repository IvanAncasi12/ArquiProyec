// images
import blogImg1 from "/public/images/blog/img-7.jpg";
import blogImg2 from "/public/images/blog/img-8.jpg";
import blogImg3 from "/public/images/blog/img-9.jpg";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/img-4.jpg";
import blogSingleImg2 from "/public/images/blog/img-5.jpg";
import blogSingleImg3 from "/public/images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Small House For Smart Family',
        slug:'Small-House-For-Smart-Family',
        screens: blogImg1,
        description: 'Varius arcu elementum orci ornare feugiat aliqet tincidunt. Naetur faucibus molestie sollicitudin vestibulum.',
        author: 'Anne William',
        authorTitle:'CEO',
        authorImg:blogAvaterImg1,
        create_at: '14 AUG,23',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'The Golden Ratio 2D Sketch',
        slug:'The-Golden-Ratio-2D-Sketch',
        screens: blogImg2,
        description: 'Varius arcu elementum orci ornare feugiat aliqet tincidunt. Naetur faucibus molestie sollicitudin vestibulum.',
        author: 'Konal Biry',
        authorTitle:'Manager',
        authorImg:blogAvaterImg2,
        create_at: '16 AUG,23',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
        sClass:'s2',
    },
    {
        id: '3',
        title: 'Best Colors & Natural Materials',
        slug:'Best-Colors-&-Natural-Materials',
        screens: blogImg3,
        description: 'Varius arcu elementum orci ornare feugiat aliqet tincidunt. Naetur faucibus molestie sollicitudin vestibulum.',
        author: 'Jenefer Willy',
        authorTitle:'Bolod',
        authorImg:blogAvaterImg3,
        create_at: '18 AUG,23',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
        sClass:'s2',
    },
];
export default blogs;