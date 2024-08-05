export interface SpacerType {
    size?: string;
}

export function Spacer(props: SpacerType) {
    return (
        <div style={{ height: `${props.size}em`, width: '100%' }} />
    );
}