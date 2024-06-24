import { Typography, Card } from "@material-tailwind/react";
import FadeIn, {FadeInStagger} from "./FadeIn.jsx";
import { Statistic } from 'antd';
import CountUp from "react-countup";

const formatter = (value) => <CountUp enableScrollSpy={true} end={value} separator="," />;
function StatsCard({ count, title, description }) {
    return (
        <Card color="transparent" shadow={false}>
            <Typography
                variant="gradient"
                className="text-4xl font-bold"
                color="blue-gray"
            >
                {count}
            </Typography>
            <hr className="mt-2 mb-4 max-w-sm" />
            <Typography
                variant="h5"
                color="blue-gray"
                className="mt-1 font-bold"
            >
                {title}
            </Typography>
            <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
                {description}
            </Typography>
        </Card>
    );
}

const stats = [
    {
        count: <Statistic valueStyle={{fontSize: '30px'}} suffix="+" value={5} formatter={formatter} />,
        title: "YEARS OF EXCELLENCE\n",
        description: "5 years of commitment to academic brilliance and innovative education at IMC Krems Tashkent.",
    },
    {
        count: <Statistic valueStyle={{fontSize: '30px'}} suffix="+" value={3} formatter={formatter} />,
        title: "PROGRAMS",
        description: "Choose from 2 programs, tailored to shape future leaders in a global context.",
    },
];

export function StatsSection() {
    return (
        <section className="lg:py-28 py-10 px-8 container mx-auto">
        <FadeInStagger>
            <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
                <Card
                    className="stat-bg py-24 text-center"
                    shadow={false}
                >
                    <FadeIn>
                    <Typography
                        variant="h1"
                        className="text-white !leading-snug text-4xl"
                    >
                        IMC
                        It's all in me
                    </Typography>
                    </FadeIn>
                    <FadeIn>
                    <Typography
                        variant="h4"
                        color="white"
                        className="mt-10 font-bold"
                    >
                        Eco Warrior Achievement
                    </Typography>
                    </FadeIn>
                    <FadeIn>
                    <Typography
                        variant="lead"
                        className="mt-1 text-base mx-auto !text-gray-300 lg:w-8/12 "
                    >
                        We provide professional training in line with international standards which prepares people for key positions in companies and organisations.
                    </Typography>
                    </FadeIn>
                </Card>
                <div>
                    <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
                        {stats.map((props, key) => (
                            <StatsCard key={key} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </FadeInStagger>
        </section>
    );
}

export default StatsSection;