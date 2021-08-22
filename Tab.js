import React, { useState } from 'react';
import AtomBox from '../../../../../Atomic/atoms/Box';
import AtomButtonNormalize from '../../../../../Atomic/atoms/Button/AtomButtonNormalize';
import AtomButtonRounded from '../../../../../Atomic/atoms/Button/AtomButtonRounded';
import AtomButtonRoundedPrimary from '../../../../../Atomic/atoms/Button/AtomButtonRoundedPrimary';
import AtomTextField from '../../../../../Atomic/atoms/TextField';
import AtomTypography from '../../../../../Atomic/atoms/Typography';
import HaloSelect from '../../../../../Atomic/molecules/Autocomplete/HaloSelect';
import IconButtonClose from '../../../../../Atomic/molecules/Button/IconButtonClose';
import MakeGrid from '../../../../../Atomic/molecules/Grid/MakeGrid';
import HaloDialog from '../../../../../Atomic/molecules/HaloDialog';
import LinkTo from '../../../../../Atomic/molecules/LinkTo';
import SwitchWithLabel from '../../../../../Atomic/molecules/SwitchWithLabel';
import TabsIndicatorCenter from '../../../../../Atomic/molecules/Tab/TabsIndicatorCenter';
import ToolbarAction from '../../../../../Atomic/molecules/Toolbar/ToolbarAction';
import PlatformCart from './PlatformCard';
let tabsArray = [
  {
    label: 'Google Play',
    content: TabGooglePlay,
  },
  {
    label: 'Samsung Galaxy Store',
    content: TabSamsung,
  },
];
function TabGooglePlay() {
  return (
    <MakeGrid
      grids={[
        {
          children: (
            <AtomTextField
              label="Tên gói"
              fullWidth
              size="small"
              variant="outlined"
            />
          ),
          props: { xs: 6 },
        },
        {
          children: (
            <AtomTextField
              label="Tên lớp"
              fullWidth
              size="small"
              variant="outlined"
            />
          ),
          props: { xs: 6 },
        },
        {
          children: (
            <AtomTextField
              label="Hash chính∙(Không bắt buộc)"
              fullWidth
              size="small"
              variant="outlined"
            />
          ),
          props: { xs: 12 },
        },
        {
          children: (
            <SwitchWithLabel
              label={
                <>
                  <AtomTypography>Đăng nhập một lần (SSO)</AtomTypography>
                  <AtomTypography variant="body2" color="textSecondary">
                    Sẽ khởi chạy từ thông báo của Android
                  </AtomTypography>
                </>
              }
            />
          ),
          props: { xs: 12 },
        },
        {
          children: (
            <SwitchWithLabel
              label={
                <>
                  <AtomTypography>
                    Log In-App Events Automatically (Recommended) ​
                  </AtomTypography>
                  <AtomTypography variant="body2" color="textSecondary">
                    Lưu ý: Khi bật chuyển đổi này, bạn nên ngừng đăng nhập thủ
                    công mua hàng trong ứng dụng, bắt đầu dùng thử và đăng ký
                    các sự kiện trên Android. Nếu không, bạn sẽ thấy báo cáo
                    trùng lặp. <LinkTo>Tìm hiểu thêm</LinkTo>
                  </AtomTypography>
                </>
              }
            />
          ),
          props: { xs: 12 },
        },
      ]}
    />
  );
}
function TabSamsung() {
  return (
    <AtomTextField label="Tên gói" fullWidth size="small" variant="outlined" />
  );
}

const appStore = [
  { content: TabSamsung, label: 'Amazon Appstore' },
  { content: TabSamsung, label: 'apkmonk' },
  { content: TabSamsung, label: 'APKPure' },
  { content: TabSamsung, label: 'Bemobi Mobile Store' },
  {
    id: 'a5',
    value: '5',
    content: TabSamsung,
    label: 'Aptoide A1 App Store Market',
  },
  { id: 'a6', value: '6', content: TabSamsung, label: 'OPPO App Market' },
];
function PlatformCardAndroid() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleChangeSelect = (event, newValue) => {
    setValue(newValue);
  };
  const addStore = valueSelect => {
    tabsArray = [...tabsArray, ...valueSelect];
    handleClose();
  };
  return (
    <>
      <PlatformCart
        title="Android"
        actionHeader={
          <ToolbarAction>
            <AtomButtonRounded
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Thêm cửa hàng ứng dụng
            </AtomButtonRounded>
            <AtomButtonNormalize variant="contained" color="primary">
              Bắt đầu nhanh
            </AtomButtonNormalize>
            <IconButtonClose />
          </ToolbarAction>
        }
        content={<TabsIndicatorCenter tabs={tabsArray} />}
        actionCardSetting={
          <AtomBox flex={1} textAlign="center">
            <AtomButtonRounded variant="contained" color="primary">
              Xóa cửa hàng ứng dụng
            </AtomButtonRounded>
          </AtomBox>
        }
      />
      <HaloDialog
        open={isOpen}
        onClose={handleClose}
        title="Chọn cửa hàng android"
        dialogContentProps={{ dividers: true }}
        content={
          <HaloSelect
            options={appStore}
            label="Chọn cửa hàng android"
            textFieldProps={{
              variant: 'outlined',
              size: 'small',
            }}
            AutocompleteProps={{
              onChange: handleChangeSelect,
              multiple: true,
            }}
          />
        }
        actions={
          <>
            <AtomButtonRounded onClick={handleClose}>Hủy</AtomButtonRounded>
            <AtomButtonRoundedPrimary onClick={() => addStore(value)}>
              Thêm
            </AtomButtonRoundedPrimary>
          </>
        }
      />
    </>
  );
}

PlatformCardAndroid.propTypes = {};

export default PlatformCardAndroid;
