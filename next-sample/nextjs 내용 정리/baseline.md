```bash
# next-sample 이라는 이름으로 신규 Next.js 프로젝트를 작성
npx create-next-app@latest --ts next-sample

cd next-sample

# 개발 서버 기동
npm run dev

# 프로젝트를 빌드한다.
npm run build

# 빌드한 생성물을 기반으로 서버를 가동한다.
npm run start
```

### Next.js 렌더링 방법
> 4가지 렌더링 방법
> - 정적 사이트 생성(SSG: Static Site Generation)
> - 클라이언트 사이드 렌더링(CSR : Client Side Rendering)
> - 서버 사이드 렌더링(SSR : Server Side Rendering)
> - 점진적 정적 재생성(ISR : Incremental Static Regeneration)