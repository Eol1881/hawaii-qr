import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface DummyState {
  dummy: { id: string } | null;
}

interface DummyActions {
  setDummy: (dummy: { id: string } | null) => void;
}

const useDummyStore = create<DummyState & DummyActions>((set) => ({
  dummy: null,
  setDummy: (dummy) =>
    set({
      dummy: dummy
    })
}));

export const useDummy = () => useDummyStore((state) => state.dummy);

export const useDummyStoreActions = () =>
  useDummyStore(
    useShallow((state) => ({
      setDummy: state.setDummy
    }))
  );
