import { trpc } from '../utils/trpc';
import type { NextPageWithLayout } from './_app';
import type { inferProcedureInput } from '@trpc/server';
import Link from 'next/link';
import { Fragment } from 'react';
import type { AppRouter } from '~/server/routers/_app';




const IndexPage: NextPageWithLayout = () => {

  const utils = trpc.useUtils();
  const userQuery = trpc.user.list.useInfiniteQuery(
    {
      limit: 5,
    },
    {
      getNextPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    },
  );

  const addUser = trpc.user.add.useMutation({
    async onSuccess() {
      // refetches users after a user is added
      await utils.user.list.invalidate();
    },
  });
  return (
    <div className="flex flex-col bg-gray-800 py-8">
      <div className="flex flex-col py-8 items-start gap-y-2">
          <div className="flex flex-col"></div>
          <h2 className="text-3xl font-semibold">
            Latest Users
            {userQuery.status === 'pending' && '(loading)'}
          </h2>

          <button
            className="bg-gray-900 p-2 rounded-md font-semibold disabled:bg-gray-700 disabled:text-gray-400"
            onClick={() => userQuery.fetchNextPage()}
            disabled={!userQuery.hasNextPage || userQuery.isFetchingNextPage}
          >
            {userQuery.isFetchingNextPage
              ? 'Loading more...'
              : userQuery.hasNextPage
              ? 'Load More' 
              : 'Nothing more to load'}
          </button>

          {userQuery.data?.pages.map((page, index) => (
            <Fragment key={page.items[0]?.id || index}>
              {page.items.map((item) => (
                <article key={item.id}>
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <Link className="text-gray-400" href={`/user/${item.id}`}>
                    View more
                  </Link>
                </article>
              ))}
            </Fragment>
          ))}
        </div>

        <hr />

<div className="flex flex-col py-8 items-center">
  <h2 className="text-3xl font-semibold pb-2">Add a User</h2>

  <form
    className="py-2 w-4/6"
    onSubmit={async (e) => {
      /**
       * In a real app you probably don't want to use this manually
       * Checkout React Hook Form - it works great with tRPC
       * @link https://react-hook-form.com/
       * @link https://kitchen-sink.trpc.io/react-hook-form
       */
      e.preventDefault();
      const $form = e.currentTarget;
      const values = Object.fromEntries(new FormData($form));
      type Input = inferProcedureInput<AppRouter['user']['add']>;
      //    ^?
      const input: Input = {
        name: values.name as string,
        email: values.email as string,
      };
      try {
        console.log(input)
        await addUser.mutateAsync(input);

        $form.reset();
      } catch (cause) {
        console.error({ cause }, 'Failed to add user');
      }
    }}
  >
    <div className="flex flex-col gap-y-4 font-semibold">
      <input
        className="focus-visible:outline-dashed outline-offset-4 outline-2 outline-gray-700 rounded-xl px-4 py-3 bg-gray-900"
        id="name"
        name="name"
        type="text"
        placeholder="name"
        disabled={addUser.isPending}
      />
      <textarea
        className="resize-none focus-visible:outline-dashed outline-offset-4 outline-2 outline-gray-700 rounded-xl px-4 py-3 bg-gray-900"
        id="email"
        name="email"
        placeholder="email"
        disabled={addUser.isPending}
      />

      <div className="flex justify-center">
        <input
          className="cursor-pointer bg-gray-900 p-2 rounded-md px-16"
          type="submit"
          disabled={addUser.isPending}
        />
        {addUser.error && (
          <p style={{ color: 'red' }}>{addUser.error.message}</p>
        )}
      </div>
    </div>
  </form>
</div>
</div>

      

  )
};

export default IndexPage;

