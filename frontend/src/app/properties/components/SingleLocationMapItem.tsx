import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface SingleLocationMapItemType {
    label: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export function SingleLocationMapItem(props: SingleLocationMapItemType) {
    return <div className="flex items-center hover:bg-red-200 bg-gray-200 cursor-pointer p-2 m-2 hover:p-2 rounded-md">
        <props.icon fontSize="small" sx={{ color: "red" }} />
        <h4 className="ml-5">{props.label}</h4>
        <div />
    </div>
}