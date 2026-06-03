import { ReactElement } from "react";
import { cloneElement } from "react";

interface NewButtonProps {
    url?: string;
    icon?: ReactElement | null;
    label: string;
}

const NewButton: React.FC<NewButtonProps> = ({ url, icon, label }) => (
    <div className="text-base my-4">
        <div className={`animated-cursor flex flex-row items-center gap-2 select-none transition-all rounded-xl border w-fit p-3 hover:bg-white hover:text-black font-semibold ${!url ? "cursor-not-allowed" : ""}`} onClick={() => url && window.open(url, "_blank")}>
            {icon && (
                <div className="w-4">
                {icon}
                </div>
            )}
            <div>{label}</div>
        </div>
    </div>
);

export default NewButton;
