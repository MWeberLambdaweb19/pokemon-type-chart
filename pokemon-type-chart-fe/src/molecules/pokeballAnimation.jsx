import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "react-spring";
import FluidImg from "../atoms/fluidImg";
import Container from "../atoms/container";
// images
import pokeTop from "../img/pokeballtop.png";
import pokeBottom from "../img/pokeballbottom.png";

const PokeballAnimation = () => {
	const { register, handleSubmit, watch, errors, getValues } = useForm();
	const onSubmit = () => console.log(getValues());
	const [isBallOpen, setIsBallOpen] = useState(false);

	useEffect(() => {
		// change ball
		console.log(`isBallOpen: ${isBallOpen}`);
		// TODO: need to stop refresh unless ball clicked
	});

	const ShowForm = ({ isBallOpen }) => {
		const props = useSpring({
			display: isBallOpen ? "inline" : "none",
			from: { display: "none" },
			zIndex: 999,
		});
		console.log(errors, watch);
		return (
			<animated.div style={props}>
				<form id="pokeForm" onSubmit={handleSubmit(onSubmit)}>
					<input
						name="searchName"
						defaultValue="Search for Pokemon"
						ref={register}
					/>
					<input type="submit" />
				</form>
			</animated.div>
		);
	};

	const OpenBall = ({ isBallOpen }) => {
		const props = useSpring({
			display: isBallOpen ? "inline" : "none",
			from: { display: "none" },
			zIndex: 999,
		});
		return (
			<animated.div style={props}>
				<Container id="pokeballBottom" height={16.5}>
					<FluidImg src={pokeBottom} />
				</Container>
			</animated.div>
		);
	};

	return (
		<>
			<AnimationWrapper
				className={"animationWrapper"}
				isBallOpen={isBallOpen}
				onClick={() => setIsBallOpen(!isBallOpen)}
			>
				<Container height={20}>
					<FluidImg src={pokeTop} />
				</Container>
			</AnimationWrapper>
			<ShowForm isBallOpen={isBallOpen} />
			<OpenBall isBallOpen={isBallOpen} />
		</>
	);
};

const AnimationWrapper = styled.div``;
export default PokeballAnimation;
