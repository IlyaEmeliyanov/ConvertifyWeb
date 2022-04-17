import {FC} from 'react'

const Footer: FC = () => {
    return (
        <footer className="relative bottom-8 w-full">
            <nav>
                <ul className="flex flex-col items-center justify-center gap-4">
                    <li><p className="font-medium text-lg text-gray-600"><span className="font-bold">Tel:</span> <a href="tel:+393288871290" className="text-indigo-800 hover:text-indigo-500">+39 3288871290</a></p></li>
                    <li><p className="font-medium text-lg text-gray-600"><span className="font-bold">Email:</span> <a href='mailto:ilya.emeliyanov@icloud.com' className="transition-colors text-indigo-800 hover:text-indigo-500">ilya.emeliyanov@icloud.com</a></p></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;