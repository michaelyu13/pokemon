import Skeleton from 'react-loading-skeleton';

const PokemonSkeleton = ({ skeletonItems }) => {
    return Array(skeletonItems)
        .fill(0)
        .map((_, i) => (
            <div key={i} className="border-styles flex max-w-2xl flex-col bg-slate-50 py-4 drop-shadow-lg">
                <Skeleton width={40} height={28} />
                <Skeleton width={150} height={32} />
                <Skeleton className="mb-6 mt-2" width={150} height={150} />
                <Skeleton width={96} height={28} />
                <Skeleton className="mt-2" width={96} height={28} />
            </div>
        ));
};

export default PokemonSkeleton;
