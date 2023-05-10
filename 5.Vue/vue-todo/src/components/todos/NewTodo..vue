<template>
  <form class="my-2">
    <p>
      <label class="block mb-2 text-xl text-white" htmlFor="title">Title</label>
      <input
        class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
        type="text"
        id="title"
      />
    </p>
    <p>
      <label class="block mb-2 text-xl text-white" htmlFor="summary"
        >Summary</label
      >
      <textarea
        class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
        id="summary"
        rows="5"
      />
    </p>
    <p>
      <label class="block mb-2 text-xl text-white" htmlFor="category"
        >Category</label
      >
      <select
        class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded"
        id="category"
        defaultValue="moderate"
      >
        <option value="todo">📑 To do</option>
        <option value="progress">👀 On progress</option>
        <option value="done">😀 Done</option>
      </select>
    </p>
    <p class="mt-2 text-red-500">Please fill out all forms!</p>
    <p class="flex justify-end gap-4">
      <button class="text-xl text-white" type="button">Cancel</button>
      <button class="px-6 py-3 text-xl text-red-200" type="submit">Add</button>
    </p>
  </form>
</template>

<script setup></script>
