<template>
  <div class="row">
    <div class="col-12">
      <form class="rounded shadow mt-n6 mb-4">
        <div class="input-group input-group-lg">
          <span class="input-group-text border-0 pe-1">
            <i class="fe fe-search" />
          </span>
          <input
            class="form-control border-0 px-1"
            type="text"
            aria-label="Search for your issue..."
            placeholder="Search for service, support, and issue... ">

          <span class="input-group-text border-0 py-0 ps-1 pe-3">
            <button
              class="btn btn-sm btn-primary"
              type="submit">
              Search
            </button>
          </span>
        </div>
      </form>
      <!-- Text -->
      <div class="row align-items-center mb-6 mb-md-8">
        <div class="col-auto">
          <h6 class="fw-bold text-uppercase text-muted mb-0">
            Common searches:
          </h6>
        </div>
        <div class="col ms-n5">
          <p class="fs-sm text-muted mb-0">
            Request a call, Reissue an invoice, Bookkeeping progress...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>