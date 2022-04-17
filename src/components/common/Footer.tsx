import {FC} from 'react'

const Footer: FC = () => {
    return (
        <footer className="absolute bottom-8 w-full">
            <nav>
                <ul className="flex flex-col items-center justify-center gap-4">
                    <li><p className="font-medium text-lg text-gray-600"><span className="font-bold">Tel:</span> +39 3288871290</p></li>
                    <li><p className="font-medium text-lg text-gray-600"><span className="font-bold">Email:</span> <a href='mailto:ilya.emeliyanov@icloud.com' className="transition-colors hover:text-indigo-600">ilya.emeliyanov@icloud.com</a></p></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;