# 배포 가이드

## 현재 상태
✅ Git 커밋 완료
✅ 빌드 테스트 통과

## 배포 방법

### 방법 1: Vercel (권장 - 가장 쉬움)

#### 1단계: GitHub에 저장소 생성
1. https://github.com/new 접속
2. 저장소 이름 입력 (예: `portfolio-app`)
3. Public 또는 Private 선택
4. "Create repository" 클릭

#### 2단계: GitHub에 코드 푸시
터미널에서 다음 명령어 실행:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-app.git
git branch -M main
git push -u origin main
```

#### 3단계: Vercel에 배포
1. https://vercel.com 접속
2. "Add New..." → "Project" 클릭
3. GitHub 저장소 선택
4. "Import" 클릭
5. 자동으로 빌드 및 배포 시작!

---

### 방법 2: Vercel CLI 직접 배포

터미널에서:

```bash
npx vercel login
npx vercel --prod
```

---

### 방법 3: Netlify

1. https://app.netlify.com 접속
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. "Deploy site" 클릭

---

## 배포 후 확인사항

- [ ] 사이트가 정상적으로 로드되는지 확인
- [ ] 모든 섹션이 올바르게 표시되는지 확인
- [ ] 모바일 반응형이 작동하는지 확인
- [ ] 링크와 네비게이션이 정상 작동하는지 확인
