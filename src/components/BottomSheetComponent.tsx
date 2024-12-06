import React, { useCallback, useMemo, forwardRef, useImperativeHandle, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";

interface Props {
  children: React.ReactNode; // Gộp tất cả nội dung vào `children`
  snapPoints?: string[]; // Optional snap points, default to ['50%']
  initialIndex?: number; // Optional initial index, default to 0
}

export interface BottomSheetMethods {
  open: () => void;
  close: () => void;
}

const BottomSheetComponent = forwardRef<BottomSheetMethods, Props>((props, ref) => {
  const { children, initialIndex = 0, snapPoints = ['50%'] } = props;

  const sheetRef = useRef<BottomSheet>(null);

  // Expose methods to parent using ref
  useImperativeHandle(ref, () => ({
    open: () => sheetRef.current?.snapToIndex(0),
    close: () => sheetRef.current?.close(),
  }));

  const renderBackdrop = useCallback(
    (backdropProps: any) => (
      <BottomSheetBackdrop
        {...backdropProps}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={initialIndex}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>{children}</BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
});

export default BottomSheetComponent;
