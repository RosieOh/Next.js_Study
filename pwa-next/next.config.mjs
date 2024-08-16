import withPlugins from 'next-compose-plugins';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

export default withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    dest: "public",
                },
            },
        ],
        // 추가 플러그인 작성
    ],
    nextConfig
);
