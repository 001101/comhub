<div class="container" style="text-align: center;">
    <h1 id="app-title" class="animated fadeIn"><?php echo Yii::app()->name; ?></h1>
    <br/>
    <div class="row">
        <div class="panel panel-default animated fadeIn" style="max-width: 300px; margin: 0 auto 20px; text-align: left;">
            <div class="panel-heading"><?php echo Yii::t('UserModule.auth', '<strong>Password</strong> recovery!'); ?></div>
            <div class="panel-body">
                <p><?php echo Yii::t('UserModule.base', "You've got an e-mail with a new password."); ?></p><br/>
                <a href="<?php echo $this->createUrl('//') ?>" class="btn btn-primary"><?php echo Yii::t('UserModule.auth', 'back to home') ?></a>
            </div>
        </div>
    </div>
</div>