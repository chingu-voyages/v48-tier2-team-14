import "ldrs/helix";

const LoadingPage = (isLoading) => {
	return (
		<div aria-live="polite" aria-busy={isLoading}>
			{isLoading && <l-helix size="150" speed="2.5" color="black"></l-helix>}
		</div>
	);
};
export default LoadingPage;
