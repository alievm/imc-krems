import clsx from "clsx";

function Office({ name, children, invert = false }) {
    return (
        <address
            className={clsx(
                "text-sm not-italic",
                invert ? "text-neutral-300" : "text-neutral-600"
            )}
        >
            <strong className={invert ? "text-white" : "text-neutral-950"}>
                {name}
            </strong>
            <br />
            {children}
        </address>
    );
}

const Offices = ({ invert = false, ...props }) => {
    return (
        <ul role="list" {...props}>
            <li>
                <Office name="Uzbekistan" invert={invert}>
                    campus in
                    <br />
                    Tashkent State University of Economics
                </Office>
            </li>
            <li>
                <Office name="Tashkent" invert={invert}>
                    Street,
                    <br />
                    Islam Karimov, 100066
                </Office>
            </li>
        </ul>
    );
};

export default Offices;
