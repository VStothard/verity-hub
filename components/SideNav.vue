<template>
  <div class="lg:text-center lg:p-8">
    <div class="max-w-sm lg:mx-auto">
      <div class="flex items-center lg:block lg:mt-8">
        <div class="lg:hidden px-2">
          <span class="m-0 text-slate-500 text-lg font-semibold">Verity Stothard</span>
        </div>
        <div class="hidden lg:block">
          <img class="w-32 h-32 rounded-full" src="~/assets/img/profile.jpg">
          <h2 class="my-4">Hey I'm Verity,</h2>
          <p class="mt-2">Front End Developer from Sydney, Australia.</p>
          <div class="my-4">
            <span class="inline-block mt-2">
              <a href="https://jamstack.org/" class="text-link-peach">✌️ JAMStack lover</a>
            </span>
            <br class="hidden lg:block">
            <span class="inline-block mt-2"><a href="https://skl.sh/2FUOh3K" class="text-link-peach">🤓 Skillshare teacher</a></span>
            <br class="hidden lg:block">
            <span class="inline-block mt-2">
              🐶 Dog mumma to
              <a
                href="https://www.instagram.com/alfiemakesfriends/"
                class="text-link-peach"
              >@alfiemakesfriends</a>
            </span>
            <br class="hidden lg:block">
            <div class="mt-8">
              <p>Connect with me on social:</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.social-icon {
  width: 25px;
}
</style>
