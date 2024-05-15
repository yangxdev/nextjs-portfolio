import { ReactElement, useContext } from "react";
import { cloneElement } from "react";
import { Link } from "react-scroll";
import { ScrollPointContext } from "../functional/ScrollPointContext";
import toast from "react-hot-toast";
import { MdInfo } from "react-icons/md";

type NewButtonProps = {
    url?: string;
    icon?: JSX.Element;
    label: string;
    light?: boolean;
    small?: boolean;
    disableZoom?: boolean;
} & ({ scrollTo: string; scrollFrom: string } | { scrollTo?: never; scrollFrom?: never });

const NewButton: React.FC<NewButtonProps> = ({ url, icon, label, light, small, scrollTo, disableZoom, scrollFrom }) => {
    const { setScrollPoint } = useContext(ScrollPointContext);

    return (
        <>
            {scrollTo ? (
                <Link
                    to={scrollTo}
                    smooth={true}
                    duration={750}
                    offset={-100}
                    onClick={() => {
                        setScrollPoint(scrollFrom);
                        toast(`Press ▲ to go back up`, {
                            icon: <MdInfo />,
                            position: "bottom-center",
                            duration: 3000,
                            style: { marginBottom: "18px", borderRadius: "10px", background: "#0f0f0f", color: "#fdfdfd" },
                        });
                    }}
                >
                    <div
                        className={`animated-cursor flex flex-row items-center gap-2 select-none transition-all rounded-xl ${light ? "bg-[#fdfdfd] hover:bg-[#0f0f0f] hover:text-[#fdfdfd] border-[#0f0f0f] border-[0px]" : "bg-[#0f0f0f] hover:bg-[#fdfdfd] hover:text-[#0f0f0f]"} border w-fit ${
                            small ? "p-3 h-[30px]" : "p-3 h-fit"
                        } ${disableZoom ? "" : "hover:p-4"} hover:font-semibold ${!url ? "cursor-not-allowed" : ""}`}
                        onClick={() => url && window.open(url, "_blank")}
                    >
                        {icon && <div className="w-4">{icon}</div>}
                        <div>{label}</div>
                    </div>
                </Link>
            ) : (
                <div
                    className={`animated-cursor flex flex-row items-center gap-2 select-none transition-all rounded-xl ${light ? "bg-[#fdfdfd] hover:bg-[#0f0f0f] hover:text-[#fdfdfd] border-[#0f0f0f] border-[0px]" : "bg-[#0f0f0f] hover:bg-[#fdfdfd] hover:text-[#0f0f0f]"} border w-fit ${
                        small ? "p-3 h-[30px]" : "p-3"
                    } ${disableZoom ? "" : "hover:p-4"} hover:font-semibold ${!url ? "cursor-not-allowed" : ""}`}
                    onClick={() => url && window.open(url, "_blank")}
                >
                    {icon && <div className="w-4">{icon}</div>}
                    <div>{label}</div>
                </div>
            )}
        </>
    );
};

export default NewButton;
