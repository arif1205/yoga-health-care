import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionBanner from "../Utilities/SectionBanner";
import useScroll from "../Utilities/ScrollTop";
// styles and images
import { Wrapper } from "./Service.styles";
import bg from "../../Images/about-us-banner.jpg";

const Service = () => {
	const [data, setData] = useState({});
	const { id } = useParams();

	// single data with id
	useEffect(() => {
		const loadData = async () => {
			const result = await (await fetch("../services.json")).json();
			setData(result.find((item) => item.id === id));
		};
		loadData();
	}, []);

	useScroll();

	return (
		<Wrapper>
			<SectionBanner bg={bg} text={data?.name} />
			<div className='service-body container'>
				<div className='service-img'>
					<img src={data?.img} alt='Yoga' />
				</div>
				<h1 className='display-3'>We believe yoga is for everyone</h1>
				<p>
					{data?.des} On the basis of the medical center “Yoga Center” can be
					given a thorough examination of the body and get the advice of highly
					qualified specialists in various fields of medicine. According to
					studies, our doctors will make an individual program of prevention and
					treatment of identified diseases, directed to a surgical treatment if
					necessary.
				</p>
				<p>
					In today’s operational department conducted a wide range of operations
					under local and general anesthesia; as in “Yoga Center” provides
					services for the diagnosis and treatment of infertility, including the
					use of reproductive technologies (IVF).
				</p>
				<h1 className='display-3'>Couldn’t find what you’re looking for?</h1>
				<p>
					In addition to the medical services we provide services in the field
					of tourism. Managers of tourism department “Yoga Center” will help
					organize the passage of therapeutic and preventive measures and
					rehabilitation courses in the best health resorts of Belarus, stay in
					resorts and abroad, as well as its own tourist pearl – hotel “Yoga
					Center”, located on the island of Lepel lake.
				</p>
				<p>
					On the basis of the medical center “Yoga Center” can be given a
					thorough examination of the body and get the advice of highly
					qualified specialists in various fields of medicine.
				</p>
				<a href='#'>
					<button className='btn'>Book this course</button>
				</a>
			</div>
		</Wrapper>
	);
};

export default Service;
