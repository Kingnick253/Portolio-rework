import { BsMailbox,} from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import{ FaGithub, FaLinkedin,  } from 'react-icons/fa';
import resume from '../Pdf/Resume.pdf';
const SocialLinks = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <FaLinkedin  size={30}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/nicholas-webb-954a1b239/',
        style: 'rounded-tr-md'

    },
    {
        id:2,
        child: (
            <>
                Github <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/Kingnick253',
        

    },
    {
        id:3,
        child: (
            <>
                Resume <IoDocumentTextOutline size={30}/>
            </>
        ),
        href: {resume},
        
       

    },
    {
        id:4,
        child: (
            <>
                Email <BsMailbox  size={30}/>
            </>
        ),
        href: 'mailto:webbnicholas253@gmail.com',
       style:'rounded-br-md',

    },
]

export default SocialLinks;