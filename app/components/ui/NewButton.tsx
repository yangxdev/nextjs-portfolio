import { ReactElement } from "react";
import { cloneElement } from "react";
import { Link } from "react-scroll";

interface NewButtonProps {
    url?: string;
    icon?: ReactElement | null;
    label: string;
    light?: boolean;
    small?: boolean;
    scrollTo?: string;
}

const NewButton: React.FC<NewButtonProps> = ({ url, icon, label, light, small, scrollTo }) => (
    <>
        {scrollTo ? (
            <Link to={scrollTo} smooth={true} duration={750} offset={-100}>
                <div
                    className={`animated-cursor flex flex-row items-center gap-2 select-none transition-all rounded-xl ${light ? "bg-[#fdfdfd] hover:bg-[#0f0f0f] hover:text-[#fdfdfd] border-[#0f0f0f] border-[0px]" : "bg-[#0f0f0f] hover:bg-[#fdfdfd] hover:text-[#0f0f0f]"} border w-fit ${
                        small ? "p-3 h-[20px] hover:p-4" : "p-3 h-fit hover:p-4"
                    } hover:font-semibold ${!url ? "cursor-not-allowed" : ""}`}
                    onClick={() => url && window.open(url, "_blank")}
                >
                    {icon && <div className="w-4">{icon}</div>}
                    <div>{label}</div>
                </div>
            </Link>
        ) : (
            <div
                className={`animated-cursor flex flex-row items-center gap-2 select-none transition-all rounded-xl ${light ? "bg-[#fdfdfd] hover:bg-[#0f0f0f] hover:text-[#fdfdfd] border-[#0f0f0f] border-[0px]" : "bg-[#0f0f0f] hover:bg-[#fdfdfd] hover:text-[#0f0f0f]"} border w-fit ${
                    small ? "p-3 h-[20px] hover:p-4" : "p-3 hover:p-4"
                } hover:font-semibold ${!url ? "cursor-not-allowed" : ""}`}
                onClick={() => url && window.open(url, "_blank")}
            >
                {icon && <div className="w-4">{icon}</div>}
                <div>{label}</div>
            </div>
        )}
    </>
);

export default NewButton;
